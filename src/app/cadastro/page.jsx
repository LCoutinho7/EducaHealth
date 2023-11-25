"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./styles.module.css";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

export default function Cadastro() {
  const router = useRouter();
  const [cadastro, setCadastro] = useState({ nmCliente: "", email: "", password: "", birth_date: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCadastro({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/cliente/cadastro/0", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cadastro),
      });

      if (response.ok) {
        alert("Cadastro realizado com sucesso!");
        router.push("/login");
      }
    } catch (error) {}
  };

  return (
    <div className={styles.main}>
      <h1>CADASTRO DE USUÁRIOS</h1>
      <form className={styles.formulario} onSubmit={handleSubmit}>
        <Input
            label="Nome"
            name="nmCliente"
            placeholder="Digite seu nome"
            onChange={handleChange}
        />
        <Input
            label="Email"
            name="email"
            type="email"
            placeholder="Digite seu email"
            onChange={handleChange}
        />
        <Input
            label="Data de Aniversário"
            name="birth_date"
            type="date"
            onChange={handleChange}
        />
        <Input
            label="Senha"
            name="password"
            placeholder="Digite sua senha"
            type="password"
            onChange={handleChange}
        />
        <Button type="submit">Cadastrar</Button>
        <Link href="/login">Logar</Link>
      </form>
    </div>
  );
}
