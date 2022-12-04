

  <template>
    <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Product title</q-item-label>
          </q-item-section>
        </q-item>
    
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>1 x23$</q-item-label>
          </q-item-section>
        </q-item>
    
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>     <q-btn
                size="10px"
                color="primary"
                label="remove"
              /></q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label>     <q-btn
                  size="10px"
                  color="primary"
                  label="clear card"
                /></q-item-label>
            </q-item-section>
          </q-item>
      </q-list>
  </template>
  <script>
  
      export default {
          name: 'MiniCard',
      }
      </script>