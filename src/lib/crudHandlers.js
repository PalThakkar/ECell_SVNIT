import prisma from "@/lib/prisma";

/**
 * Generic REST handlers for a Prisma model's collection route (list + create).
 * modelName must match the Prisma client's camelCase model accessor, e.g. "teamMember".
 */
export function createCollectionHandlers(modelName, { orderBy, transformCreate } = {}) {
  return {
    async GET() {
      try {
        const items = await prisma[modelName].findMany({ orderBy });
        return Response.json({ items });
      } catch (error) {
        console.error(`${modelName} fetch error:`, error);
        return Response.json({ items: [] }, { status: 500 });
      }
    },

    async POST(request) {
      try {
        const body = await request.json();
        const data = transformCreate ? transformCreate(body) : body;
        const item = await prisma[modelName].create({ data });
        return Response.json({ success: true, item });
      } catch (error) {
        console.error(`${modelName} create error:`, error);
        return Response.json(
          { success: false, message: "Failed to create item" },
          { status: 500 },
        );
      }
    },
  };
}

/**
 * Generic REST handlers for a single item route (update + delete).
 */
export function createItemHandlers(modelName, { transformUpdate } = {}) {
  return {
    async PATCH(request, { params }) {
      try {
        const { id } = await params;
        const body = await request.json();
        const data = transformUpdate ? transformUpdate(body) : body;
        const item = await prisma[modelName].update({ where: { id }, data });
        return Response.json({ success: true, item });
      } catch (error) {
        console.error(`${modelName} update error:`, error);
        return Response.json(
          { success: false, message: "Failed to update item" },
          { status: 500 },
        );
      }
    },

    async DELETE(request, { params }) {
      try {
        const { id } = await params;
        await prisma[modelName].delete({ where: { id } });
        return Response.json({ success: true });
      } catch (error) {
        console.error(`${modelName} delete error:`, error);
        return Response.json(
          { success: false, message: "Failed to delete item" },
          { status: 500 },
        );
      }
    },
  };
}
