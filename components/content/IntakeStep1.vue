<template>
  <FormKit type="step" name="Info">
    <div class="form-section logo">
      <div class="instructions">
        <h3>Studio</h3>
        <p>
          If you don't have a studio name yet, just use your team members'
          names.
        </p>
      </div>
      <div class="response">
        <FormKit
          :value="studioName"
          @input="$emit('updateStudioName', $event)"
          type="text"
          name="Studio Name"
          validation="required"
        />
      </div>
    </div>
    <div class="form-section team-members">
      <div class="instructions">
        <h3>Members</h3>
        <p>
          Each participating studio member/founder will receive meeting
          invitations and a access to the Gamma Space Slack.
        </p>
      </div>
      <div class="response">
        <FormKit id="repeater" name="members" type="repeater">
          <div class="grid grid-cols-4 gap-2">
            <FormKit
              type="text"
              label="Name"
              name="name"
              validation="required"
              placeholder="Add name..."
            />
            <FormKit
              type="email"
              name="email"
              label="Email"
              validation="required|email"
              placeholder="Add email address..."
            />
            <FormKit
              type="text"
              label="Pronouns"
              name="pronouns"
              placeholder="Add pronouns..."
            />
            <FormKit
              type="text"
              label="Role"
              name="role"
              validation="required"
              placeholder="Add role..."
            />
          </div>
        </FormKit>
      </div>
    </div>
    <div class="form-section accommodations">
      <div class="instructions">
        <h3>Accommodations</h3>
        <p>
          What supports does your team need to access/engage fully in the
          program?
        </p>
      </div>
      <div class="response">
        <FormKit type="textarea" name="accommodations" />
      </div>
    </div>
    <div class="form-section social-media">
      <div class="instructions">
        <h3>Social Media</h3>
        <p>
          Share your social media handles so we can follow you and share your
          work! Feel free to share team members' personal accounts, and/or your
          studio's accounts.
        </p>
      </div>
      <div class="response">
        <FormKit type="textarea" name="social-media" />
      </div>
    </div>
    <div class="form-section studio-bio">
      <div class="instructions">
        <h3>Studio Bio</h3>
        <p>A short studio bio for our website. We may edit for length.</p>
      </div>
      <div class="response">
        <FormKit type="textarea" name="studio-bio" />
      </div>
    </div>
    <div class="form-section logo">
      <div class="instructions">
        <h3>Logo</h3>
        <p>Please upload your logo for our website (if you have one).</p>
      </div>
      <div class="response">
        <FormKit
          type="file"
          name="logo"
          help="SVG, PNG, GIF or JPG accepted (max 8MB)."
          accept=".jpg,.png,.gif,.svg"
        />
      </div>
    </div>
  </FormKit>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps();
const { studioName } = toRefs(props);
</script>
