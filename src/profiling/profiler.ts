type ProfilerSection = string;

const stack: ProfilerSection[] = [];
const orderFirstSeen: ProfilerSection[] = [];

const prefix = (depth = 0) => {
  return '    '.repeat(depth);
};

export const profileStart = (name: string): ProfilerSection => {
  if (orderFirstSeen.includes(name) === false) {
    orderFirstSeen.push(name);
  }
  const text = `${name} start`;
  console.log(text);
  performance.mark(text);
  return name;
};

export const profileEnd = (name: ProfilerSection | undefined) => {
  const text = `${name} end`;
  performance.mark(text);
  console.log(text);
};

export const profilePush = (name: string): ProfilerSection => {
  if (orderFirstSeen.includes(name) === false) {
    orderFirstSeen.push(name);
  }
  const text = `${name} start`;
  console.log(`${prefix(stack.length)} ${text}`);
  stack.push(name);
  performance.mark(text);
  return name;
};

export const profilePop = (name: ProfilerSection | undefined) => {
  const text = `${name} end`;
  performance.mark(text);
  const top = stack.pop();
  if (top !== name) {
    throw new Error(`Profiler mismatch: ${top} !== ${name}`);
  }
  console.log(`${prefix(stack.length)} ${text}`);
};
