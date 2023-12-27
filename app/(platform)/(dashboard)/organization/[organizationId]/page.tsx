import { OrganizationSwitcher, auth } from "@clerk/nextjs";

const OrganizationIdPage = () => {
  const { userId, orgId}= auth();
  return(
    <div>
      Organization Page
    </div>
  )
}

export default OrganizationIdPage;