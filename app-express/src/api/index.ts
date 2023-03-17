import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("hello world")
})

router.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});

router.get("/ping", (req: Request, res: Response) => {
  res.send("pong")
})

router.post("/postSubmit", async (req: Request, res: Response) => {
    const {account_id, amount} = req.body
    console.log(`id: ${account_id},,, amount: ${amount}`)

        fetch(`https://infra.devskills.app/api/transaction-management/transactions`, {
        method: 'POST',
        body: JSON.stringify({
          account_id,
          amount
        }),
        headers: { 'Content-Type': 'application/json' }
     }).then((res) => res.json())
        .then(json => console.log(json))
})

router.get("/hey", async (req: Request, res: Response) => {
  try {
    const apiResponse = await fetch('https://infra.devskills.app/api/transaction-management/transactions')
    const apiResJSON = await apiResponse.json()
    res.send(apiResJSON)
  }
  catch(err) {
    console.log(err);
    res.status(500).send('something went wrong');
  }
})



export default router;
