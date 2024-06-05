import path from "node:path";
import { Edge } from "edge.js";

export const edge = Edge.create({ cache: false });
edge.mount(path.resolve("resources/views"));
