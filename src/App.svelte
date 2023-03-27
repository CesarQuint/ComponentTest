<script>

  import { onMount } from 'svelte';
  import { ToastStore, UserStore } from './stores';

  import Tag from './components/tag.svelte'
  import Button from './components/button.svelte';
  import Toast from './components/toast.svelte';
  import Form from './components/form.svelte';
  import Input from './components/Input.svelte';
  import Loading from './components/loading.svelte';
  import Pagination from './components/pagination.svelte';
  import Modal from './components/modal.svelte';

  let loading =false

  let metadata ={}

  
  const getItems = async () => {
      let result = await fetch('https://dummyjson.com/products')
      let data = await result.json()
      metadata = data
      console.log(metadata);
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
    ToastStore.error(data)

    getItems()

  })

</script>

<br>
<br>
<div class="container"> 
  <Tag text='Tag Rojo' color='danger' size='medium'/>
  <Tag text='Tag Light' color='primary' isLight  isDelete />
  <Tag text='Tag Rojo' color='primary' size='large' isRounded/>
  <Tag isDelete text="Hola como estas " color='primary' size='large' isRounded/>
  <Tag text='Tag Rojo' size='medium' color='danger' isDelete />
  <Button text='Abrir Modal' color='primary' on:click={()=>UserStore.modalCreate()}/>
</div>
<br>

<Toast/>

<Form loading={ loading }>
  <Input type=text icon="tag" />
</Form>
<Loading loading={true}/>

<Pagination metadata={metadata}/>

<Modal id="UserCreate" title="Crear">
 <div class="box">
  Hola Test
 </div>
</Modal>
