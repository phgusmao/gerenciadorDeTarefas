import { Routes } from "@angular/router";

import { ListarTarefaComponent } from "./listar";

import { TarefaService } from "./shared";

import { TarefasModule } from "./tarefas.module";

import { CadastrarTarefaComponent } from "./cadastrar";

import { EditarTarefaComponent } from "./editar";

export const TarefaRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
    },
    {
        path: 'tarefas/shared',
        component: TarefaService
    },
    {
        path: 'tarefas',
        component: TarefasModule
    },
    {
        path: 'tarefas/cadastrar',
        component: CadastrarTarefaComponent
    },
    {
        path: 'tarefas/editar/:id',
        component: EditarTarefaComponent
    }
]
