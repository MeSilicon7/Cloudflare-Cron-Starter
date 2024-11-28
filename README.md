# Cloudflare Cron Starter

This template is a fork of the official Cloudflare cron template with modifications to enhance its utility. It includes a skeleton for multiple cron jobs and additional features.

## Key Features of Scheduled Workers

- **Trigger Customization**: Configure Workers to run at specific intervals using cron syntax.
- **Versatile Integrations**: Scheduled Workers can:
    - Make requests to external endpoints.
    - Publish messages to a Queue.
    - Query a D1 Database.
    - Store results in KV (Key-Value storage) or D1 Database.
- **Scalable and Reliable**: Cloudflare Workers are serverless, scalable, and globally distributed.

Learn more in the [Cloudflare Workers documentation](https://developers.cloudflare.com/workers/).

## Development Workflow

1. **Start Development Server**:
   Run the command:
    ```bash
    bun run dev
    ```
2. **Simulate a Cron Trigger**:
   Test locally with:
    ```bash
    curl "http://localhost:8787/__scheduled?cron=*+*+*+*+*"
    ```
3. **Deploy Your Worker**:
   When ready, deploy with:
    ```bash
    bun run deploy
    ```

## Resource Binding and Environment Setup

Define bindings for KV, Queues, D1 Databases, and other resources in `wrangler.toml`. After updating bindings, regenerate the `Env` type definition with:

```bash
bun run cf-typegen
```

## Limits and Quotas

- **Free Accounts**: Up to 5 cron triggers.
- **Paid Accounts**: Up to 250 cron triggers.

For more details, see the [Cloudflare Workers limits documentation](https://developers.cloudflare.com/workers/platform/limits/).

Happy building with Cloudflare Workers! 🚀
