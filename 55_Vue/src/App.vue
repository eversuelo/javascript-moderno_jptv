<script setup>
import { ref, reactive, computed, watch } from "vue";

import Header from "./components/Header.vue";
import Button from "./components/Button.vue";
import { calcularTotalPagar } from './helpers';
//Variables del Input
const MIN = 0;
const MAX = 20000;
const DEFAULT = MAX / 2;
const STEP = 100;
const cantidad = ref(DEFAULT);
const plazo = ref(3);
const total=ref(0);
const state = reactive({
  cantidad,
  plazo,
  total,
});
//Computed Properties
const formatearDinero = (valor) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });
  return formatter.format(Number(valor));
}
const calcularTotal=(e)=>{
  plazo.value=e.target.value;
  total.value=calcularTotalPagar(cantidad.value,plazo.value);
}
const handleChangeDecremento = () => {
  const valor = cantidad.value - STEP;
  if (valor < MIN) {
    alert('El valor mínimo es $' + MIN);
    return;
  }
  cantidad.value = valor;
}
const handleChangeIncremento = () => {
  const valor = cantidad.value + STEP;
  if (valor > MAX) {
    alert('El valor máximo es $' + MAX);
    return;
  }
  cantidad.value = valor;
}
watch(cantidad, (newValue, oldValue) => {
  total.value=calcularTotalPagar(newValue,plazo.value);
},{immediate:true});
//console.log(cantidad.value); //Accediendo al valor de un ref
//console.log(state.cantidad);  //Accediendo al valor de un reactive

//Código removido del input-atributos
/**
 *  @input="handleChange" :value="DEFAULT"
 */
</script>

<template>
  <div class="my-20 max-w-lg mx-auto bg-white shadow p-10">
    <Header />
    <div class="flex justify-between mt-10">
      <Button title="-" @click="handleChangeDecremento" />
      <Button title="+" @click="handleChangeIncremento" />
    </div>
    <div class="my-5">
      <input :step="STEP" :min="MIN" :max="MAX" type="range"
        class="w-full bg-gray-300 accent-lime-500 hover:accent-lime-700" v-model.number="cantidad" />
      <p class="text-center my-10 text-5xl text-indigo-600 font-extrabold">{{ formatearDinero(cantidad) }}</p>
      <h2 class="text-2xl font-extrabold text-gray-500 text-center">
        Elige un <span class="text-indigo-600">plazo </span>para pagar
      </h2>
      <select class="w-full p-2 bg-indigo-200 border-gray-700 rounded-lg text-center text-xl font-bold text-gray-500 mt-5"
       @input="calcularTotal">
        <option value="3">3 meses</option>
        <option value="6">6 meses</option>
        <option value="12">12 meses</option>
        <option value="24">24 meses</option>
      </select>
    </div>
    <div class="my-5 space-y-3 bg-gray-50 p-5">
      <h2 class="text-2xl font-extrabold text-gray-500 text-center">
        Resumen de <span class="text-indigo-600">pagos </span>
      </h2>
      <p class="text-xl text-gray-500 text-center font-bold">{{ plazo }} Meses</p>
      <p class="text-xl text-gray-500 text-center font-bold">Pago mensual {{ formatearDinero(Number(total)/Number(plazo)) }}</p>
      <p class="text-xl text-gray-500 text-center font-bold">Total a pagar {{ formatearDinero(total) }} </p>
    </div>
  </div>
</template>
