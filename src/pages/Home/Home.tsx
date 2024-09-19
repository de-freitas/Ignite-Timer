import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskIpunt,
} from "./styles";

const newCycleValidationSchema = zod.object({
  task: zod.string().min(2, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5)
    .max(60, "Tempo máximo permitido: 60 minutos"),
});

type NewCycleFormData = zod.infer<typeof newCycleValidationSchema>;

export default function Home() {
  const { register, handleSubmit, watch, formState, reset } =
    useForm<NewCycleFormData>({
      resolver: zodResolver(newCycleValidationSchema),
      defaultValues: {
        task: "",
        minutesAmount: 0,
      },
    });

  function handleCreateNewCicle(data: NewCycleFormData) {
    console.log(data);
    reset();
  }

  console.log(formState.errors);

  const task = watch("task");
  const isSubmitDisabled = !task || task.length < 3;

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCicle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em </label>
          <TaskIpunt
            id="task"
            type="text"
            list="task-suggestions"
            placeholder="dê um nome para o seu projeto"
            {...register("task")}
          />

          <datalist id="task-suggestions">
            <option value="projeto 1"></option>
            <option value="projeto 2"></option>
            <option value="projeto 3"></option>
            <option value="projeto 4"></option>
            <option value="projeto 5"></option>
          </datalist>

          <label htmlFor="minutesAmount">durante </label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            {...register("minutesAmount", { valueAsNumber: true })}
          />
          <span> minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>

          <Separator>:</Separator>

          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
