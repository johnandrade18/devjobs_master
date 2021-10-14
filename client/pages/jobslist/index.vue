<template>
  <div>
    <JobsList/>
  </div>
</template>

<script>
import JobsList from "@/components/JobsList";

export default {
  middleware: "isAuthenticated",
  layout: 'AuthReady',
  name: "JobList",
  components: {
    JobsList,
  },
};
</script>
