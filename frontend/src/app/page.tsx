import ChatBox from "@/components/ChatBox";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black p-4">
      <main className="flex w-full max-w-5xl flex-col items-center justify-center">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            Book Search Agent
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Ask me anything about books. I'm here to help you find your next great read.
          </p>
        </div>
        
        <ChatBox />
      </main>
    </div>
  );
}
