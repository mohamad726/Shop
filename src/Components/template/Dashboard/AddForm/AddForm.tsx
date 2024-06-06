import {
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import { postProductData } from "../../../../services/postData";
import { generate_token } from "../../../../lib/helper";

function AddForm() {
  const { register, handleSubmit } = useForm();
  const [img, setImg] = useState<string>("");

  function handleForm(d) {
    d.price = Number(d.price);
    postProductData({ ...d, id: generate_token(3), image: img });
  }

  function handleFile(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const fileData = event?.target?.result;
      setImg(fileData as string);
    };
    reader.readAsDataURL(file);
  }

  return (
    <Card sx={{ width: 800 }}>
      <CardHeader title="Add Card" />
      <CardContent>
        <Form onSubmit={handleSubmit(handleForm)}>
          <Stack spacing={2}>
            <FormControl>
              <label>Name</label>
              <TextField {...register("name")} />
            </FormControl>
            <FormControl>
              <label>Price</label>
              <TextField {...register("price")} />
            </FormControl>
            <FormControl>
              <InputLabel id="select-label">Category</InputLabel>
              <Select
                {...register("category")}
                labelId="select-label"
                id="select"
                label="Category"
              >
                <MenuItem value="furniture">Furniture</MenuItem>
                <MenuItem value="hand-bag">Hand-bag</MenuItem>
                <MenuItem value="books">Books</MenuItem>
                <MenuItem value="tech">Tech</MenuItem>
                <MenuItem value="sneakers">Sneakers</MenuItem>
                <MenuItem value="travels">Travels</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <label>Description</label>
              <TextField {...register("description")} />
            </FormControl>
            <FormControl>
              <label>image</label>
              <TextField
                // {...register("file")}
                type="file"
                onChange={handleFile}
              />
            </FormControl>
            {/* <input type="file" /> */}
            <Button type="submit" variant="contained">
              Add
            </Button>
          </Stack>
        </Form>
      </CardContent>
    </Card>
  );
}

export default AddForm;
