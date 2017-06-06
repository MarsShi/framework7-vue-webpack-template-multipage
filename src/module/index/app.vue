<template>
    <!-- App -->
    <div id="app">
        <f7-views>
            <f7-view main>
                <f7-pages navbar-fixed toolbar-fixed>
                    <f7-page name="home">
                        <f7-navbar title="Hello App"></f7-navbar>

                        <Hello></Hello>

                        <f7-toolbar>
                            <f7-link>Link 1</f7-link>
                            <f7-link>Link 2</f7-link>
                        </f7-toolbar>

                        <p class="my-css">Hello,Framework7</p>
                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-views>
    </div>
</template>

<script>
    import Hello from '../../components/Hello.vue';

    export default {
        data () {   
            return {

            }
        },
        components:{
            Hello : Hello
        }
    }
</script>