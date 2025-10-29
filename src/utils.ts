import path from "path";
import os from "os";

/**
 * Converts an absolute path to Claude's directory encoding format.
 * Claude encodes paths by replacing slashes with hyphens, with special
 * handling for hidden directories (starting with '.') which use '--'.
 * Examples:
 *   /Users/eshao/mnt/misc → -Users-eshao-mnt-misc
 *   /Users/eshao/.bin/claude → -Users-eshao--bin-claude
 *   /Users/eshao/mnt/.config/.claude/projects → -Users-eshao-mnt--config--claude-projects
 */
export function encodePathForClaude(absolutePath: string): string {
	return absolutePath.replace(/\/\./g, "--").replace(/\//g, "-");
}

/**
 * Gets the trace directory path following Claude's convention.
 * Mirrors the structure used in ~/.claude/projects/
 *
 * @param workingDir The current working directory to encode
 * @returns Full path to the trace directory: ~/.claude/trace/{encoded-path}/
 */
export function getTraceDirectory(workingDir: string = process.cwd()): string {
	const homeDir = os.homedir();
	const claudeTraceRoot = path.join(homeDir, ".claude", "trace");
	const encodedPath = encodePathForClaude(workingDir);
	return path.join(claudeTraceRoot, encodedPath);
}
