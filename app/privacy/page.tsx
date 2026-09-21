import Link from "next/link";

export const metadata = { title: "Privacy — BEAT" };

export default function Privacy() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#070809",
        color: "#f5f7fa",
        padding: "48px 24px",
        fontFamily: "Manrope, Arial",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <Link href="/beat" style={{ color: "#a99aff" }}>
          ← Back to BEAT
        </Link>

        <p
          style={{
            marginTop: 48,
            color: "#8d7cff",
            letterSpacing: 2,
            fontSize: 12,
          }}
        >
          BEAT / PRIVACY
        </p>

        <h1>Privacy</h1>

        <p style={{ color: "#aeb4be", lineHeight: 1.8 }}>
          This competition build is a demonstration of the BEAT experience.
          The live social interactions shown in the interface use local demo
          state unless explicitly connected to the Django authentication
          backend. Do not submit sensitive personal information through the
          demo.
        </p>

        <h2>Data in the demo</h2>

        <p style={{ color: "#aeb4be", lineHeight: 1.8 }}>
          Demo profile, post, like, save and comment state may be stored locally
          in the browser. Authentication credentials are sent only to the
          configured BEAT authentication API when you use the sign-in or
          registration flow.
        </p>
      </div>
    </main>
  );
}
