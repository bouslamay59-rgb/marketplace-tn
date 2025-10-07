export default function Inbox() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <aside className="bg-white rounded-2xl p-3 shadow">Conversations</aside>
      <section className="md:col-span-2 bg-white rounded-2xl p-3 shadow min-h-[300px]">
        Sélectionne une conversation pour chatter.
      </section>
    </div>
  );
}
