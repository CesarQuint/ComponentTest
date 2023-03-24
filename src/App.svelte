<script>

  import { onMount } from 'svelte';
  import { ToastStore } from './stores';

  import Tag from './components/Tag.svelte'
  import Button from './components/Button.svelte';
  import Toast from './components/Toast.svelte';
  import Form from './components/Form.svelte';
  import Input from './components/Input.svelte';

  let loading =false

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
  <Button text='Crear Cuenta' color='primary'/>
</div>
<br>

<Toast/>

<Form loading={ loading }>
  <Input type=text icon="tag" />
</Form>