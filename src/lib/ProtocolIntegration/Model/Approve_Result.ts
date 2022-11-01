export interface IApproveOptions{ spenderAddress:string; tokendAdress:string; 
    //They can send validator Id rather than address 
    amount?:number;
    }
    
export interface IApproveRetValues{ 
    To:string; Value:number; 
    data:string;
    }
    