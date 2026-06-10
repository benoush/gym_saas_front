import { Grid } from "@mui/material"
import BenedictePage from "@/views/benedicte"


const benedictePage = async ({
  params,
}: {
  params: Promise<{
    age: number;
  }>;
}) => {
  const {  age } = await params;
  
  return (
    <Grid container spacing={6}>

      <Grid size={{ xs: 12 }}>
        <BenedictePage
          age={Number(age)}
        />
      </Grid>

    </Grid>
  )
}

export default benedictePage;
