<script>

  import { onMount } from 'svelte';
  import { ToastStore, UserStore } from './stores';

  import Menu from './layout/menu.svelte';
  import Tag from './components/tag.svelte'
  import Button from './components/button.svelte';
  import Toast from './components/toast.svelte';
  import Form from './components/form.svelte';
  import Input from './components/Input.svelte';
  import Loading from './components/loading.svelte';
  import Pagination from './components/pagination.svelte';
  import Modal from './components/modal.svelte';
  import Dropdown from './components/dropdown.svelte';

  let loading = false
  let metadata = {}
  let tagOptions= [{
    text: 'Tag 1',
    color: 'primary',
    isLight: true
  },{
    text: 'Tag 2',
    color: 'light'
  },
  {
    text:'Tag 1',
    color:'black',
    isLight: true
  },
  {
    text:'Tag 1',
    color:'primary'
  }]

  
  const getItems = async () => {
      let result = await fetch('https://dummyjson.com/products')
      let data = await result.json()
      metadata ={
        pages:100,
        page:0
      }
    }

  onMount(()=>{
    let data = {
      message:'Test',
      isLight: true,
      link: {
        text: 'aaaasdasdasdasd',
        href: '#'
      }
    }
    ToastStore.success(data)

    getItems()

  })

</script>

<header class="">
<Toast/>
<Menu/>
</header>
<br/>
<main class="container">
  <div class="box">

    <Form>
      <Input label="Nombre" icon="tag" placeholder="Ingresa tu Nombre"/>
      <Input label= "Email" icon="tag" color="info" placeholder="Ingresa tu Correo"/>
      <Dropdown text="Opciones" options={[{text: 'Opcion 1'},{text: 'Opcion 2'},{text: 'Opcion 3'}]}/>

      <div class="tags">

        {#each tagOptions as tagOption }
        <Tag color={tagOption.color} text={tagOption.text} isLight={tagOption.isLight}/>
      {/each}

      </div>

    </Form> 

  </div>
  <br>

  <Button color="black" text="Abrir el Modal" on:click={()=>UserStore.modalCreate()}/>

  <Modal id="UserCreate" title="Crear usuario" type="card">
    <div class="box">
      <p>Este es un modal de carta con aspectos</p>
    </div>
  </Modal>

  <br>
  <br>
  <Pagination metadata={metadata}/>
</main>

<br>
<br><br><br><br>

<footer class="footer">
  <div class="content has-text-centered">
    <p>
      <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
      is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
    </p>
  </div>
</footer>