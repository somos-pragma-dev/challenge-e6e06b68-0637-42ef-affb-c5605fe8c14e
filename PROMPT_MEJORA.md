# Prompt para Mejorar el Codigo Base

Copia y pega el siguiente contenido completo en un asistente de IA (Claude, ChatGPT, etc.)
para obtener un ZIP con el proyecto arrancable. Si el adjunto es una carcasa (docs/placeholders),
el asistente debe materializar la estructura del stack del briefing, sin resolver las fases del reto.

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Contexto técnico original
Crear una aplicación React con TypeScript, componentes funcionales y hooks

### Reto
- Tema: desarrollo-frontend
- Seniority: junior-l1
- Tipo: practical
- Título: Desarrollo de Aplicación React con TypeScript
- Tiempo estimado: 8 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Configuración del Entorno — objetivo: Configurar el entorno de desarrollo con React y TypeScript. — entregable (NO resolver): Entorno de desarrollo configurado con React y TypeScript.
- Fase 2: Creación de Componentes — objetivo: Crear los componentes necesarios para la aplicación. — entregable (NO resolver): Componentes de la aplicación creados y funcionando correctamente.
- Fase 3: Gestión de Estado — objetivo: Implementar la gestión del estado de la aplicación. — entregable (NO resolver): Gestión del estado implementada y funcionando correctamente.
- Fase 4: Interacción con API — objetivo: Implementar la interacción con una API para la gestión de tareas. — entregable (NO resolver): Interacción con API implementada y funcionando correctamente.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (ZIP).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:
// === ARCHIVO: src/index.tsx ===
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// === ARCHIVO: src/App.tsx ===
import React from 'react';
import { TaskContextProvider } from './context/TaskContext';
import TaskList from './components/TaskList';

const App: React.FC = () => {
  return (
    <TaskContextProvider>
      <TaskList />
    </TaskContextProvider>
  );
};

export default App;

// === ARCHIVO: src/components/TaskList.tsx ===
import React, { useEffect, useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import TaskDetail from './TaskDetail';
import TaskForm from './TaskForm';

const TaskList: React.FC = () => {
  const { tasks, loadTasks } = useTaskContext();
  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <TaskDetail task={task} />
            <TaskForm task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

// === ARCHIVO: src/components/TaskDetail.tsx ===
import React from 'react';

interface TaskDetailProps {
  task: Task;
}

const TaskDetail: React.FC<TaskDetailProps> = ({ task }) => {
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskDetail;

// === ARCHIVO: src/components/TaskForm.tsx ===
import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { Task } from '../models/task';

interface TaskFormProps {
  task?: Task;
}

const TaskForm: React.FC<TaskFormProps> = ({ task }) => {
  const { addTask, updateTask } = useTaskContext();
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      updateTask({...task, title, description });
    } else {
      addTask({ id: Date.now(), title, description });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descripción" />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default TaskForm;

// === ARCHIVO: src/context/TaskContext.tsx ===
import React, { createContext, useContext, useState } from 'react';
import { taskApi } from '../api/taskApi';
import { Task } from '../models/task';

interface TaskContextProps {
  tasks: Task[];
  loadTasks: () => void;
  addTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  deleteTask: (id: number) => void;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const TaskContextProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = async () => {
    const fetchedTasks = await taskApi.getTasks();
    setTasks(fetchedTasks);
  };

  const addTask = (task: Task) => {
    taskApi.addTask(task);
    setTasks([...tasks, task]);
  };

  const updateTask = (task: Task) => {
    taskApi.updateTask(task);
    setTasks(tasks.map(t => t.id === task.id? task : t));
  };

  const deleteTask = (id: number) => {
    taskApi.deleteTask(id);
    setTasks(tasks.filter(task => task.id!== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, loadTasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = (): TaskContextProps => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext debe ser usado dentro de un TaskContextProvider');
  }
  return context;
};

// === ARCHIVO: src/api/taskApi.ts ===
import axios from 'axios';
import { Task } from '../models/task';

const taskApi = {
  getTasks: async (): Promise<Task[]> => {
    const response = await axios.get<Task[]>('https://jsonplaceholder.typicode.com/todos');
    return response.data;
  },
  addTask: async (task: Task) => {
    await axios.post('https://jsonplaceholder.typicode.com/todos', task);
  },
  updateTask: async (task: Task) => {
    await axios.put(`https://jsonplaceholder.typicode.com/todos/${task.id}`, task);
  },
  deleteTask: async (id: number) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
};

export { taskApi };

// === ARCHIVO: src/models/task.ts ===
export interface Task {
  id: number;
  title: string;
  description: string;
}

// === ARCHIVO: src/services/taskService.ts ===
import { taskApi } from '../api/taskApi';
import { Task } from '../models/task';

export const taskService = {
  getTasks: async (): Promise<Task[]> => {
    return taskApi.getTasks();
  },
  addTask: async (task: Task) => {
    await taskApi.addTask(task);
  },
  updateTask: async (task: Task) => {
    await taskApi.updateTask(task);
  },
  deleteTask: async (id: number) => {
    await taskApi.deleteTask(id);
  }
};

// === ARCHIVO: src/utils/http.ts ===
import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// === ARCHIVO: public/index.html ===
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React App</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>

// === ARCHIVO: tests/TaskList.test.tsx ===
import React from 'react';
import { render } from '@testing-library/react';
import TaskList from '../src/components/TaskList';

test('renders TaskList component', () => {
  render(<TaskList />);
});

```
