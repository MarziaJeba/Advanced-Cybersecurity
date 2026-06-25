/**
 * PagePlaceholder — A reusable "coming soon" placeholder for feature pages.
 * Each teammate can replace this with their actual implementation.
 *
 * Props:
 *   icon    - Emoji icon for the page
 *   title   - Feature name
 *   owner   - Team member responsible
 *   desc    - Short description of the feature
 *   color   - Tailwind color class for the accent (e.g. 'from-cyber-teal to-cyber-green')
 */
export default function PagePlaceholder({ icon, title, owner, desc, color = 'from-accent to-accent-dark' }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] animate-fade-in">
      {/* Icon bubble */}
      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg mb-6 animate-float`}>
        <span className="text-3xl">{icon}</span>
      </div>

      <h1 className="text-2xl font-bold text-surface-900 mb-2">{title}</h1>
      <p className="text-surface-500 text-sm max-w-md text-center mb-4">{desc}</p>

      {/* Owner badge */}
      <span className="badge-info text-xs">
        👤 Assigned to: <strong className="ml-1">{owner}</strong>
      </span>

      {/* Dashed border box with instructions */}
      <div className="mt-8 border-2 border-dashed border-surface-300 rounded-2xl p-6 max-w-lg w-full text-center">
        <p className="text-surface-500 text-xs font-mono">
          Replace this placeholder in <br />
          <code className="text-accent font-semibold">src/pages/{title.replace(/\s+/g, '')}.jsx</code>
        </p>
      </div>
    </div>
  );
}
