import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  TableContainer,
  useTheme,
} from "@mui/material";
import BaseCard from "../shared/DashboardCard";

type PriorityBg = "primary" | "secondary" | "error" | "success";

interface Product {
  id: string;
  name: string;
  post: string;
  pname: string;
  priority: "Low" | "Medium" | "High" | "Critical";
  pbg: PriorityBg;
  budget: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Emad Moanes",
    post: "Web Designer",
    pname: "Elite Admin",
    priority: "Low",
    pbg: "primary",
    budget: "3.00",
  },
  {
    id: "2",
    name: "Belal Soliman",
    post: "Project Manager",
    pname: "Real Homes WP Theme",
    priority: "Medium",
    pbg: "secondary",
    budget: "24.00",
  },
  {
    id: "3",
    name: "Mahmoud Hussien",
    post: "Project Manager",
    pname: "MedicalPro WP Theme",
    priority: "High",
    pbg: "error",
    budget: "12.00",
  },
  {
    id: "4",
    name: "Omar Gad",
    post: "Frontend Engineer",
    pname: "Hosting Press HTML",
    priority: "Critical",
    pbg: "success",
    budget: "500",
  },
];

const ProductPerformance: React.FC = () => {
  const theme = useTheme();

  return (
    <BaseCard title="Product Performance">
      <TableContainer
        sx={{
          width: "100%",
          maxWidth: "100%",
          overflowX: "auto",
        }}
      >
        <Table aria-label="product performance table" sx={{ mt: 2 }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  ID
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Assigned
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Priority
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography color="textSecondary" variant="h6">
                  Budget
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Typography fontSize="15px" fontWeight={500}>
                    {product.id}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        {product.name}
                      </Typography>
                      <Typography color="textSecondary" fontSize="13px">
                        {product.post}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    {product.pname}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    sx={{
                      backgroundColor: theme.palette[product.pbg].main,
                      color: "#fff",
                      px: 1,
                    }}
                    size="small"
                    label={product.priority}
                  />
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">${product.budget}k</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </BaseCard>
  );
};

export default ProductPerformance;
