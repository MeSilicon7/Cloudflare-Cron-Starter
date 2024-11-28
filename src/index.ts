import DailyJobs from './jobs/DailyJobs';
import HourlyJobs from './jobs/HourlyJobs';

export default {
    async fetch(request: Request, env: Env, ctx: ExecutionContext) {
        return new Response('Worker running');
    },

    async scheduled(controller: ScheduledController, env: Env, ctx: ExecutionContext) {
        switch (controller.cron) {
            case '0 * * * *':
                await HourlyJobs();
                break;
            case '0 0 * * *':
                await DailyJobs();
                break;
        }
        console.log('cron processed');
    },
} satisfies ExportedHandler<Env>;
