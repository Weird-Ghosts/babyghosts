<template>
  <FormKit type="step" name="Financial">
    <div class="form-section">
      <div class="instructions">
        <h3>Name for cheque</h3>
        <p>Who should the grant cheques be made out to?</p>
      </div>
      <div class="response">
        <FormKit type="text" name="Name for cheque" validation="required" />
      </div>
    </div>
    <div class="form-section">
      <div class="instructions">
        <h3>Address</h3>
        <p>Where should the cheques be mailed?</p>
      </div>
      <div class="response">
        <FormKit
          type="textarea"
          name="Address to send cheque to"
          validation="required"
        />
      </div>
    </div>
  </FormKit>
</template>
