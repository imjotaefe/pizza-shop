import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form"
import { Link, useSearchParams } from 'react-router-dom'

import * as z from 'zod';
import { toast } from "sonner";
import { Label } from "@radix-ui/react-label";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "../../api/sign-in";

const signInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

export function Signin() {
  const [sarchParams] = useSearchParams();
  const { register, handleSubmit, formState: {isSubmitting} } = useForm<SignInForm>({
    defaultValues:{
      email: sarchParams.get('email') ?? ''
    }
  });

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })
  async function handleSignin(data: SignInForm){
    try {
      await authenticate({email: data.email})
      toast.success('Enviamos um link para o seu email', {
        action: {
          label: 'Reenviar',
          onClick: () => handleSignin(data),
        }
      });
    } catch (error) {
      toast.error('Credenciais inválidas')
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button asChild variant="ghost" className="absolute right-8 top-8">
          <Link 
            to="/sign-up" 
            className="">
              Novo estabelecimento
          </Link>
        </Button>
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Acessar painel</h1>
            <p className="text-sm text-muted-foreground">Acompanhe seus vendas pelo painel do parceiro</p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handleSignin)}>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")}/>
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>Acessar painel</Button>
            
          </form>
        </div>
      </div>
    </>
  );
}
