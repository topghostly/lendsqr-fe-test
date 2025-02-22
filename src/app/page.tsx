import { redirect } from "next/navigation";
export default function Home() {
  {
    /* REDIRECT TO THE LOGIN PAGE ON LOAD  */
  }
  redirect("/auth");
}
