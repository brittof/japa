-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "label" TEXT NOT NULL DEFAULT 'Enhancement',
    "status" TEXT NOT NULL DEFAULT 'Pending',
    "due" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Task_title_key" ON "Task"("title");
