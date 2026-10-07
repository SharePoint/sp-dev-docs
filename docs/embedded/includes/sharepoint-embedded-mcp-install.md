<!-- This is an include file. Don't add a title or H1 heading. -->

Add the SharePoint Embedded MCP server to a coding agent with one click:

> [!div class="nextstepaction"]
> [Add to Visual Studio Code](https://vscode.dev/redirect/mcp/install?name=spe&config=%7B%22type%22%3A%22stdio%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40microsoft%2Fspe-mcp%22%2C%22start%22%5D%7D)

Using the pre-release build? [Add the server to Visual Studio Code Insiders](https://insiders.vscode.dev/redirect/mcp/install?name=spe&config=%7B%22type%22%3A%22stdio%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40microsoft%2Fspe-mcp%22%2C%22start%22%5D%7D).

For other MCP clients, register the server with the same `npx` command:

```console
# Claude Code
claude mcp add spe -- npx -y @microsoft/spe-mcp start

# OpenAI Codex CLI
codex mcp add spe -- npx -y @microsoft/spe-mcp start
```
