
import { Card, Form } from "react-bootstrap";
import '../css/styles.css'


const RenderTranscationHistory = () => {
            const a = 10;
    const id = 'idghs-sh-sd-hs-h'
    const isWithdraw = true;
        return (
                 <div>

    <div className="column">    
        <label>Transcation history</label>
            <fieldset>
                    <p>Transfered {a} from account {id}</p><br/>
                    <p>The current balance is {a}</p><br/>
            </fieldset>
    </div>
    <div className="column">
            <fieldset>
                    <p>{isWithdraw ? 'Withdrew' : 'Inserted'} {a} from account {id}</p><br/>
                    <p className="isHidden">The current balance is {a}</p><br/>
            </fieldset>
    </div>
    <div className="column">
            <fieldset>
                    <p>Transfered {a} from account {id}</p><br/>
                    <p className="isHidden">The current balance is {a}</p><br/>
            </fieldset>
    </div>
    <div className="column">
            <fieldset>
                    <p>Transfered {a} from account {id}</p><br/>
                    <p className="isHidden">The current balance is {a}</p><br/>
            </fieldset>
    </div>

    </div>
    
        )
}

const RenderSubmitCard = () => {



    const handleClick = (event: any) => {
        console.log(event.target.dataset)
    }

return (
 <div className="row">
     <div className="column">
            <label>Submit new transcation</label>
            <br/>
             <fieldset id="transaction-field">

                <form action="http://localhost:5000/hey">
                    <label>AccountId:</label><br/>
                    <input data-type="account-id"  /><br/>
                    <label>Amount:</label><br/>
                    <input data-type="amount"  /><br/><br/>
                    <input data-type="transaction-submit" type="submit"/>
                </form>
            </fieldset>
    </div>

   
</div>
)
}

export default RenderSubmitCard