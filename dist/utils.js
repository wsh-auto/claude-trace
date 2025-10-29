"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodePathForClaude = encodePathForClaude;
exports.getTraceDirectory = getTraceDirectory;
const path_1 = __importDefault(require("path"));
const os_1 = __importDefault(require("os"));
/**
 * Converts an absolute path to Claude's directory encoding format.
 * Claude encodes paths by replacing slashes with hyphens, with special
 * handling for hidden directories (starting with '.') which use '--'.
 * Examples:
 *   /Users/eshao/mnt/misc → -Users-eshao-mnt-misc
 *   /Users/eshao/.bin/claude → -Users-eshao--bin-claude
 *   /Users/eshao/mnt/.config/.claude/projects → -Users-eshao-mnt--config--claude-projects
 */
function encodePathForClaude(absolutePath) {
    return absolutePath.replace(/\/\./g, "--").replace(/\//g, "-");
}
/**
 * Gets the trace directory path following Claude's convention.
 * Mirrors the structure used in ~/.claude/projects/
 *
 * @param workingDir The current working directory to encode
 * @returns Full path to the trace directory: ~/.claude/trace/{encoded-path}/
 */
function getTraceDirectory(workingDir = process.cwd()) {
    const homeDir = os_1.default.homedir();
    const claudeTraceRoot = path_1.default.join(homeDir, ".claude", "trace");
    const encodedPath = encodePathForClaude(workingDir);
    return path_1.default.join(claudeTraceRoot, encodedPath);
}
//# sourceMappingURL=utils.js.map