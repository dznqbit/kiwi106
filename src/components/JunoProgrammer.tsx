import { Container } from "@mantine/core";
import { ConfigPanel } from "./ConfigPanel";
import { NoteTester } from "./NoteTester";
import { MessageLog } from "./MessageLog";
import { HexCalculator } from "./HexCalculator";

export const JunoProgrammer = () => {
  return (
    <Container size="lg">
      <ConfigPanel />
      <MessageLog />
      <HexCalculator />
      <NoteTester />
    </Container>
  );
};
