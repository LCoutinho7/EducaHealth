"use client";
import Link from "next/link";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

export default function LoginUser() {
  const navigate = useRouter();
  const [msgstatus, setMsgStatus] = useState("");
  const [usuario, setUsuario] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/cliente/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });

      if (response.ok) {
        const user = await response.json();
        if (user) {
          const token =
            Math.random().toString(36).substring(2) +
            Math.random().toString(36).substring(2);
          sessionStorage.setItem("token-user", token);
        }
      } else {
        alert("Senha ou email inválidos!")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.main}>
      <h1>INFORMAÇÕES DOS USUÁRIOS</h1>
      <div>
        <form className={styles.formulario} onSubmit={handleSubmit}>
          <legend className={styles.title}>LOGIN</legend>
          <Input
            label="Digite seu email"
            name="email"
            placeholder="Digite seu email"
            onChange={handleChange}
          />
          <Input
            label="Digite sua senha"
            name="password"
            type="password"
            placeholder="Digite sua senha"
            onChange={handleChange}
          />
          <Button type="submit">LOGIN</Button>
          <p className={styles.cadastro}>
            <Link href="/cadastro">Cadastre-se</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
