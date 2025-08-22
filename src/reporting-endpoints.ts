export default (endpoints: Record<string, string>): string => Object.entries(endpoints).map((pair) => pair[0] + '="' + pair[1] + '"').join();
