export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      <section className="rounded-lg border bg-white p-6 shadow-sm">
        <h2 className="mb-2 text-lg font-semibold">Editor coming soon</h2>
        <p className="text-sm text-gray-600">A full visual editor will appear here in a future PR.</p>
      </section>
      <section className="rounded-lg border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">Preview (disabled)</h2>
        <div className="relative aspect-video w-full overflow-hidden rounded border bg-gray-50">
          <div className="absolute inset-0 z-10 grid place-items-center bg-white/70 text-gray-600">
            Preview is disabled for now. Strict CSP sandboxing will be added later.
          </div>
          <iframe
            title="Preview"
            sandbox="allow-scripts"
            srcDoc="<html><body style='font-family: sans-serif; color: #666; display: grid; place-items: center; height: 100vh;'>Preview</body></html>"
            className="h-full w-full"
          />
        </div>
      </section>
    </div>
  );
}
