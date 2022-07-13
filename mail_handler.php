<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    function post_captcha($user_response) {
        $fields_string = '';
        $fields = array(
            'secret' => '6Le50ZIbAAAAAOaYNevgUP_W5wTcsIWmQ9z5E4Nv',
            'response' => $user_response
        );
        foreach($fields as $key=>$value)
        $fields_string .= $key . '=' . $value . '&';
        $fields_string = rtrim($fields_string, '&');

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://www.google.com/recaptcha/api/siteverify');
        curl_setopt($ch, CURLOPT_POST, count($fields));
        curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, True);

        $result = curl_exec($ch);
        curl_close($ch);

        return json_decode($result, true);
    }

    // Call the function post_captcha
    $res = post_captcha($_POST['g-recaptcha-response']);

    if (!$res['success']) {
        // What happens when the CAPTCHA wasn't checked
        echo '<p><center><b>Please go back and make sure you check the security CAPTCHA box.</b></center></p>';
    } else {
        // If CAPTCHA is successfully completed...
$mailto="orders@bakuiscalling.com"; 
        $pcount=0;
        $gcount=0;
        $subject = "Filled Enquiry Form";

        $tours = implode(', ', $_POST['tours']);
        $service = implode(', ', $_POST['service']);
        $servicefeatures = implode(', ', $_POST['servicefeatures']);

        $from="no-reply@bakuiscalling.com";
        while (list($key,$val)=each($_POST))
        {
        $pstr = $pstr."$key : $val \n";
        ++$pcount;

        }

        if ($pcount > $gcount)
        {
        $message_body="$pstr \n $key: Tours- $tours \n $key: Services- $service \n $key: Features- $servicefeatures";
        mail($mailto,$subject,$message_body,"From:".$from);
        echo "<p><center><b>Enquiry has been sent, We'll contact you soon</b></center></p>";
        }
    }
} ?>