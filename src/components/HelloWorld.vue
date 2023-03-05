<template>
  <v-table
    fixed-header
    height="100%"
  >
    <thead>
      <tr>
        <th class="text-left">
          Nome
        </th>
        <th class="text-left">
          CPF
        </th>
        <th class="text-left">
          E-mail
        </th>
        <th class="text-left">
          Data de nascimento
        </th>
        <th class="text-left">
          Ações
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in pessoas"
        :key="item.name"
      >
        <td>{{ item.nome }}</td>
        <td>{{ item.cpf }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.dataNascimento }}</td>
        <td>
        <v-btn color="warning" prepend-icon="mdi-eye-outline" @click="$event => editar(item.id)">
          Editar
        </v-btn>
        &nbsp;&nbsp;&nbsp;
        <v-btn color="error" prepend-icon="mdi-delete-outline" @click="$event => deletar(item.id)">
          Excluir
        </v-btn>
    </td>
      </tr>
    </tbody>
  </v-table>

<!-- <v-dialog
      v-model="dialog"
      persistent
      width="1024"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal first name*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal middle name"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> -->

</template>

<script lang="ts" setup>
  import PessoaModel from '@/models/PessoaModel';
  import {onMounted, ref} from 'vue';
  import pessoaHttpService from '@/http/pessoa-http-service';
  import { get } from 'http';

  let pessoas = ref<Array<PessoaModel>>
  (

  )

  function getAll() {
    pessoaHttpService.getAll()
      .then((data: any) => {
        console.log("data: ", data.data)
        pessoas.value = data.data;
      })
  }

  // function editar(event: any){
  //   pessoaHttpService.get(event)
  //   .then((data: any) => {
  //     pessoas.value = data.id;
  //   })
  // }

  function deletar(event: any){
    console.log("$event: ", event)

    pessoaHttpService.delete(event)
    .then(() => {
      alert('Deletado com suceso.')
      getAll()
    })
  }

  onMounted(() => {
    getAll()
  })
</script>