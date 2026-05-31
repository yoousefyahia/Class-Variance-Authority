import './App.css'
import { Paragraph } from "@/components/ui/paragraph";

export default function App() {
  return (
    <>
      <Paragraph>
        Default paragraph
      </Paragraph>

      <Paragraph variant="success">
        Success message
      </Paragraph>

      <Paragraph variant="error" size="lg">
        Error message large
      </Paragraph>

      <Paragraph asChild variant="success">
        <span>
          Success as Child
        </span>
      </Paragraph>
    </>
  );
}
