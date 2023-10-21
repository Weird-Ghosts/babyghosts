<template>
  <FormKit type="step" name="Financial">
    <div class="form-section">
      <div class="instructions">
        <h3>Cheque addressee</h3>
        <p>Who should the grant cheques be made out to?</p>
      </div>
      <div class="response">
        <FormKit type="text" name="cheque-name" validation="required" />
      </div>
    </div>
    <div class="form-section">
      <div class="instructions">
        <h3>Cheque address</h3>
        <p>Where should the cheques be mailed?</p>
      </div>
      <div class="response">
        <FormKit type="textarea" name="cheque-address" validation="required" />
      </div>
    </div>
  </FormKit>
</template>
