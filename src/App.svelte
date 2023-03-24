<script>

  import Tag from './components/Tag.svelte'
  import Button from './components/Button.svelte';
  import Notification from './components/Notification.svelte';

</script>

<br>
<br>
<div class="container"> 
  <Tag text='Tag Rojo' color='danger' size='medium'/>
  <Tag text='Tag Light' color='primary' isLight/>
  <Tag text='Tag Rojo' color='primary' size='large' isRounded/>
  <Tag text='Tag Rojo' size='medium' color='danger' deleteButton/>
  <Button text='Crear Cuenta' color='primary'/>
</div>
<br>

<Notification text='Lorem .................................' color='primary' link={{text:'Visita ....', href:'#'}} isLight/>