import type { Metadata } from "next"
import { InfoPage } from "@/components/info-page"

export const metadata: Metadata = {
  title: "Privacy Policy | SeaFix Engineering",
  description: "How SeaFix Engineering handles information submitted through this website.",
}

export default function PrivacyPage() {
  return (
    <InfoPage title="Privacy Policy">
      <p>
        SeaFix Engineering uses this website to describe repair and maintenance
        services and to receive quote requests.
      </p>
      <h2>What you send us</h2>
      <p>
        The quote form asks for your name, email, phone, the service you need,
        vessel type, and a message. Phone and vessel type are optional.
      </p>
      <h2>How this site handles it</h2>
      <p>
        The form stays in your browser. It checks the fields and shows a
        confirmation. It does not store the message or send it to a server.
      </p>
      <h2>Questions</h2>
      <p>
        Write to <a href="mailto:info@seafix.com">info@seafix.com</a> or call{" "}
        <a href="tel:+306983012050">+30 69 830 12 050</a>.
      </p>
    </InfoPage>
  )
}
