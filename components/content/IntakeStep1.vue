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

    <div class="form-section team-members">
      <div class="instructions">
        <h3>Members</h3>
        <p>
          Each participating studio member/founder will receive meeting
          invitations and access to the Gamma Space Slack.
        </p>
      </div>
      <div class="response">
        <FormKit
          id="repeater"
          name="Members"
          type="repeater"
          :remove-control="true"
        >
          <div class="lg:grid lg:grid-cols-4 gap-2">
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
            help="Accessibility needs or requests."
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
        <FormKit
          type="text"
          name="Twitter"
          label="Twitter"
          placeholder="@Weird_Ghosts, @jennie, @derangedpoetess"
        />
        <FormKit
          type="text"
          name="TikTok"
          label="TikTok"
          placeholder="@weird__ghosts, @enveloppes"
        />
        <FormKit
          type="text"
          name="Instagram"
          label="Instagram"
          placeholder="@weird__ghosts, @jennie, @derangedpoetess"
        />
        <FormKit
          type="text"
          name="Other"
          label="Other"
          placeholder="Bluesky, Discord, etc."
        />
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
        <FormKit
          type="text"
          name="Steam"
          label="Steam Page"
          validation="url"
          placeholder="https://store.steampowered.com/app/2204900/STREET_UNI_X/"
        />
        <FormKit
          type="text"
          name="Website"
          label="Website"
          validation="url"
          placeholder="https://weirdghosts.ca"
        />
      </div>
    </div>
    <div class="form-section studio-bio">
      <div class="instructions">
        <h3>Studio Bio</h3>
        <p>A short studio bio for our website. We may edit for length.</p>
      </div>
      <div class="response">
        <FormKit
          type="textarea"
          name="studio-bio"
          placeholder="Vancouver-based studio focused on creating unique games inspired by extreme sports, unicycling, and classic action sports video games. Working on STREET UNI X."
        />
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
