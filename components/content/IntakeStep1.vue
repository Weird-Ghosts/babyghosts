<script setup>
const provincesAndTerritories = [
  { label: "U.S.", value: "US" },
  { label: "Jamaica", value: "JA" },
  { label: "Alberta", value: "AB" },
  { label: "British Columbia", value: "BC" },
  { label: "Manitoba", value: "MB" },
  { label: "New Brunswick", value: "NB" },
  { label: "Newfoundland and Labrador", value: "NL" },
  { label: "Northwest Territories", value: "NT" },
  { label: "Nova Scotia", value: "NS" },
  { label: "Nunavut", value: "NU" },
  { label: "Ontario", value: "ON" },
  { label: "Prince Edward Island", value: "PE" },
  { label: "Quebec", value: "QC" },
  { label: "Saskatchewan", value: "SK" },
  { label: "Yukon", value: "YT" },
];
</script>
<template>
  <FormKit type="step" name="Info">
    <div class="form-section studio">
      <div class="instructions">
        <h3>Studio</h3>
        <p>
          If you don't have a studio name yet, just use your team members'
          names.
        </p>
      </div>
      <div class="response">
        <FormKit type="text" name="Studio Name" validation="required" />
      </div>
    </div>
    <div class="form-section province">
      <div class="instructions">
        <h3>Location</h3>
        <p>
          Province(s), territor(ies), or other countries where you and your team
          members reside.
        </p>
      </div>
      <div class="response">
        <FormKit
          type="dropdown"
          name="locations"
          id="locations"
          validation="required"
          placeholder="Select…"
          multiple
          :options="provincesAndTerritories"
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
        <FormKit
          id="repeater"
          name="Members"
          type="repeater"
          :remove-control="true"
        >
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
          <FormKit
            type="textarea"
            label="Accommodations"
            name="Accommodations"
            help="Please let us know if you have any accessibility needs."
          />
        </FormKit>
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
        <FormKit type="text" name="Twitter" label="Twitter" />
        <FormKit type="text" name="TikTok" label="TikTok" />
        <FormKit type="text" name="Instagram" label="Instagram" />
        <FormKit type="text" name="Other" label="Other" />
      </div>
    </div>
    <div class="form-section social-media">
      <div class="instructions">
        <h3>Other</h3>
        <p>
          If you have a Steam page for your game, or a website, please share!
        </p>
      </div>
      <div class="response">
        <FormKit type="text" name="Steam" label="Steam Page" />
        <FormKit type="text" name="Website" label="Website" />
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
