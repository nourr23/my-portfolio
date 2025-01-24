import { Metadata } from "next";

export default async function PageLayout(props: { children: React.ReactNode }) {
  return <>{props.children}</>;
}
