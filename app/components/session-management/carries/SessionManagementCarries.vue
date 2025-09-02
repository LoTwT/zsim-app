<script setup lang="ts">
import type { Character } from "~/apis/types"

const props = defineProps<{ characters: Character[] }>()

const agentName = computed(
  () => `${props.characters[0]?.name} ${props.characters[0]?.name_en}`,
)
</script>

<template>
  <div class="flex gap-x-4">
    <SessionManagementAgentConfigurationContainer
      :agent-name="agentName"
      update-date="2025/07/18"
    >
      <SessionManagementTeamCard
        v-for="i in 3"
        :key="`${i}-col-1`"
        :characters="characters"
      />
    </SessionManagementAgentConfigurationContainer>

    <SessionManagementAgentConfigurationContainer
      :agent-name="agentName"
      update-date="2025/07/18"
    >
      <SessionManagementTeamCard
        v-for="i in 2"
        :key="`${i}-col-2`"
        :characters="characters"
      />
    </SessionManagementAgentConfigurationContainer>

    <SessionManagementAgentConfigurationContainer
      :agent-name="agentName"
      update-date="2025/07/18"
    >
      <SessionManagementTeamCard :characters="characters" />
    </SessionManagementAgentConfigurationContainer>

    <SessionManagementAgentConfigurationContainer
      :agent-name="agentName"
      update-date="2025/07/18"
    >
      <SessionManagementTeamCard
        v-for="i in 2"
        :key="`${i}-col-4`"
        :characters="characters"
      />
    </SessionManagementAgentConfigurationContainer>

    <SessionManagementAgentConfigurationContainer
      :agent-name="agentName"
      update-date="2025/07/18"
    >
      <SessionManagementTeamCard :characters="characters" />
    </SessionManagementAgentConfigurationContainer>
  </div>
</template>
