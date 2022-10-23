import { router, publicProcedure } from '../trpc';
import { z } from 'zod';

export const todoRouter = router({
    hello: publicProcedure
        .input(z.object({ text: z.string().nullish() }).nullish())
        .query(({ input }) => {
            return {
                greeting: `Hello ${input?.text ?? 'world'}`,
            };
        }),
    getAll: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.todo.findMany();
    }),
    createTodo: publicProcedure
        .input(
            z.object({
                title: z.string(),
            }),
        )
        .mutation(async ({ ctx, input }) => {
            const todoInputData = { title: input.title };
            const newTodo = await ctx.prisma.todo.create({ data: todoInputData });
            return { success: true, todo: newTodo };
        }),
});
