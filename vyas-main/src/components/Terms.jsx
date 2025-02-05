import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Terms = () => {
  return (
    <div className="container">
      <Navbar />
      <section id="terms" className="content_wrapper bg-gray-100 sm:pl-4 sm:pr-4 md:pl-8 md:pr-8 lg:pl-12 lg:pr-12 xl:pl-16 xl:pr-16">
        <div className="w-container mx-auto px-4 sm:px-0">
          <div className="w-richtext text-gray-800">
            <h1 className="text-3xl font-bold mb-6 text-center pt-10">TERMS AND CONDITIONS</h1>
            <p className="mb-6">
              PLEASE READ THESE ENTERPRISE TERMS (“<strong>TERMS</strong>”) CAREFULLY BEFORE USING THE SERVICES OFFERED BY ROBOFLOW, INC. (“<strong>COMPANY</strong>”). BY MUTUALLY EXECUTING ONE OR MORE ORDER FORMS WITH ROBOFLOW WHICH REFERENCE THESE TERMS (EACH, AN “<strong>ORDER FORM</strong>”), OR BY CLICKING A BUTTON OR CHECKBOX ON YOUR COMPUTER SCREEN INDICATING YOUR ACCEPTANCE, YOU (“<strong>CUSTOMER</strong>”) AGREE TO BE BOUND BY THESE TERMS (TOGETHER WITH ALL ORDER FORMS AND EXHIBITS, THE “<strong>AGREEMENT</strong>”) TO THE EXCLUSION OF ALL OTHER TERMS. IF YOU ARE ACCEPTING THIS AGREEMENT ON BEHALF OF A COMPANY OR OTHER LEGAL ENTITY, YOU REPRESENT THAT YOU HAVE THE AUTHORITY TO BIND SUCH ENTITY AND ITS AFFILIATES TO THESE TERMS AND CONDITIONS, IN WHICH CASE THE TERM “<strong>CUSTOMER</strong>” OR “<strong>YOU</strong>” SHALL REFER TO SUCH ENTITY AND ITS AFFILIATES. IF THE TERMS OF THIS AGREEMENT ARE CONSIDERED AN OFFER, ACCEPTANCE IS EXPRESSLY LIMITED TO SUCH TERMS.
            </p>
            <h3 className="text-xl font-bold mb-3">1. SAAS SERVICES AND SUPPORT</h3>
            <p className="mb-6">
              1.1. Subject to the terms hereof, Company will use commercially reasonable efforts to provide to Customer the products and services, including the Implementation Services set forth on an Order Form and Software (defined below) set forth in an applicable Order Form (together, the “Services”). The “Software” shall mean the platform provided by Company to Customer, including any software, source code, object code, algorithms, data, interfaces, tools, APIs, utilities, templates, forms, derivatives, improvements, enhancements, updates, patches and/or extensions related thereto. Subject to the terms hereof, Company will provide Customer with reasonable technical support services for the Software in accordance with the terms set forth on the Order Form.
            </p>
            <h3 className="text-xl font-bold mb-3">2. RESTRICTIONS AND RESPONSIBILITIES</h3>
            <p className="mb-6">
              2.1. Subject to Customer’s compliance with the terms of this Agreement, Company hereby grants to Customer a non-exclusive, non-transferable, non-sublicensable license to use the Software during the Term solely for Customer’s internal business purposes and for no other purpose. Customer will not, directly or indirectly: reverse engineer, decompile, disassemble or otherwise attempt to discover the source code, object code or underlying structure, ideas, know-how or algorithms relevant to the Services or any software, documentation or data related to the Services (“Software”); modify, translate, or create derivative works based on the Services or any Software (except to the extent expressly permitted by Company or authorized within the Services); use the Services or any Software for timesharing or service bureau purposes or otherwise for the benefit of a third party; or remove any proprietary notices or labels.
            </p>
            <p className="mb-6">
              2.2. Further, Customer may not remove or export from the United States or allow the export or re-export of the Services, Software or anything related thereto, or any direct product thereof in violation of any restrictions, laws or regulations of the United States Department of Commerce, the United States Department of Treasury Office of Foreign Assets Control, or any other United States or foreign agency or authority. As defined in FAR section 2.101, the Software and documentation are “commercial items” and according to DFAR section 252.227-7014(a)(1) and (5) are deemed to be “commercial computer software” and “commercial computer software documentation.” Consistent with DFAR section 227.7202 and FAR section 12.212, any use modification, reproduction, release, performance, display, or disclosure of such commercial software or commercial software documentation by the U.S. Government will be governed solely by the terms of this Agreement and will be prohibited except to the extent expressly permitted by the terms of this Agreement.
            </p>
            <p className="mb-6">
              2.3. Customer represents, covenants, and warrants that Customer will use the Services only in compliance with Company’s standard published policies then in effect (the “Policy”) and all applicable laws and regulations. Customer hereby agrees to indemnify and hold harmless Company against any damages, losses, liabilities, settlements and expenses (including without limitation costs and attorneys’ fees) in connection with any claim or action that arises from an alleged violation of the foregoing or otherwise from Customer’s use of Services. Although Company has no obligation to monitor Customer’s use of the Services, Company may do so and may prohibit any use of the Services it believes may be (or alleged to be) in violation of the foregoing.
            </p>
            <p className="mb-6">
              2.4. Customer shall be responsible for obtaining and maintaining any equipment and ancillary services needed to connect to, access or otherwise use the Services, including, without limitation, modems, hardware, servers, software, operating systems, networking, web servers and the like (collectively, “Equipment”). Customer shall also be responsible for maintaining the security of the Equipment, Customer account, passwords (including but not limited to administrative and user passwords) and files, and for all uses of Customer account or the Equipment with or without Customer’s knowledge or consent.
            </p>
            <h3 className="text-xl font-bold mb-3">3. CONFIDENTIALITY; PROPRIETARY RIGHTS</h3>
            <p className="mb-6">
              3.1. Each party (the “Receiving Party”) understands that the other party (the “Disclosing Party”) has disclosed or may disclose business, technical or financial information relating to the Disclosing Party’s business (hereinafter referred to as “Proprietary Information” of the Disclosing Party). Proprietary Information of Company includes non-public information regarding features, functionality and performance of the Service. Proprietary Information of Customer includes non-public data provided by Customer to Company to enable the provision of the Services (“Customer Data”). The Receiving Party agrees: (i) to take reasonable precautions to protect such Proprietary Information, and (ii) not to use (except in performance of the Services or as otherwise permitted herein) or divulge to any third person any such Proprietary Information. The Disclosing Party agrees that the foregoing shall not apply with respect to any information after five (5) years following the disclosure thereof or any information that the Receiving Party can document (a) is or becomes generally available to the public, or (b) was in its possession or known by it prior to receipt from the Disclosing Party, or (c) was rightfully disclosed to it without restriction by a third party, or (d) was independently developed without use of any Proprietary Information of the Disclosing Party or (e) is required to be disclosed by law.
            </p>
            <p className="mb-6">
              3.2. Customer shall own all right, title and interest in and to the Customer Data, as well as any image and annotation data that is based on or derived from the Customer Data and provided to Customer as part of the Services. Company shall own and retain all right, title and interest in and to (a) the Services and Software, all improvements, enhancements or modifications thereto, (b) any software, applications, inventions or other technology developed in connection with Implementation Services or support, and (c) all intellectual property rights related to any of the foregoing.
            </p>
            <p className="mb-6">
              3.3. Customer hereby grants to Company a worldwide, non-exclusive, royalty-free license to use, copy, access, process, reproduce, perform, display, modify, distribute, transmit, operate, maintain and prepare derivative works of the Customer Data for the purpose of providing the Services to Customer as set forth in this Agreement. Notwithstanding anything to the contrary, Company shall have the right to collect and analyze data and other information relating to the provision, use and performance of various aspects of the Services and related systems and technologies (including, without limitation, information concerning Customer Data and data derived therefrom, but solely in an anonymized form), and Company will be free (during and after the term hereof) to (i) use such information and data to improve and enhance the Services and for other development, diagnostic and corrective purposes in connection with the Services and other Company offerings, and (ii) disclose such data solely in aggregate or other de-identified form in connection with its business. No rights or licenses are granted except as expressly set forth herein.
            </p>
            <h3 className="text-xl font-bold mb-3">4. PAYMENT OF FEES</h3>
            <p className="mb-6">
              4.1. Customer will pay Company the then applicable fees described in the Order Form for the Services and Implementation Services in accordance with the terms therein (the “Fees”). If Customer’s use of the Services exceeds the Service Capacity set forth on the Order Form or otherwise requires the payment of additional fees (per the terms of this Agreement), Customer shall be billed for such usage and Customer agrees to pay the additional fees in the manner provided herein. Company reserves the right to change the Fees or applicable charges and to institute new charges and Fees at the end of the Initial Service Term or then-current renewal term, upon thirty (30) days prior notice to Customer (which may be sent by email). If Customer believes that Company has billed Customer incorrectly, Customer must contact Company no later than 60 days after the closing date on the first billing statement in which the error or problem appeared, in order to receive an adjustment or credit. Inquiries should be directed to Company’s customer support department.
            </p>
            <h3 className="text-xl font-bold mb-3">5. TERM AND TERMINATION</h3>
            <p className="mb-6">
              5.1. Subject to earlier termination as provided below, this Agreement is for the Initial Service Term as specified in the Order Form, and shall be automatically renewed for additional periods of the same duration as the Initial Service Term (collectively, the “Term”), unless either party requests termination at least thirty (30) days prior to the end of the then-current term.
            </p>
            <p className="mb-6">
              5.2. In addition to any other remedies it may have, either party may also terminate this Agreement upon thirty (30) days’ notice (or without notice in the case of nonpayment), if the other party materially breaches any of the terms or conditions of this Agreement. Customer will pay in full for the Services up to and including the last day on which the Services are provided. Upon any termination, Company will make all Customer Data available to Customer for electronic retrieval for a period of thirty (30) days, but thereafter Company may, but is not obligated to, delete stored Customer Data.
            </p>
            <h3 className="text-xl font-bold mb-3">6. WARRANTY AND DISCLAIMER</h3>
            <p className="mb-6">
              6.1. Company shall use reasonable efforts consistent with prevailing industry standards to maintain the Services in a manner which minimizes errors and interruptions in the Services and shall perform the Implementation Services in a professional and workmanlike manner. Services may be temporarily unavailable for scheduled maintenance or for unscheduled emergency maintenance, either by Company or by third-party providers, or because of other causes beyond Company’s reasonable control, but Company shall use reasonable efforts to provide advance notice in writing or by e-mail of any scheduled service disruption. HOWEVER, COMPANY DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR FREE; NOR DOES IT MAKE ANY WARRANTY AS TO THE RESULTS THAT MAY BE OBTAINED FROM USE OF THE SERVICES. EXCEPT AS EXPRESSLY SET FORTH IN THIS SECTION, THE SERVICES AND IMPLEMENTATION SERVICES ARE PROVIDED “AS IS” AND COMPANY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
            </p>
            <h3 className="text-xl font-bold mb-3">7. LIMITATION OF LIABILITY</h3>
            <p className="mb-6">
              7.1. NOTWITHSTANDING ANYTHING TO THE CONTRARY, EXCEPT FOR BODILY INJURY OF A PERSON, COMPANY AND ITS SUPPLIERS (INCLUDING BUT NOT LIMITED TO ALL EQUIPMENT AND TECHNOLOGY SUPPLIERS), OFFICERS, AFFILIATES, REPRESENTATIVES, CONTRACTORS AND EMPLOYEES SHALL NOT BE RESPONSIBLE OR LIABLE WITH RESPECT TO ANY SUBJECT MATTER OF THIS AGREEMENT OR TERMS AND CONDITIONS RELATED THERETO UNDER ANY CONTRACT, NEGLIGENCE, STRICT LIABILITY OR OTHER THEORY: (A) FOR ERROR OR INTERRUPTION OF USE OR FOR LOSS OR INACCURACY OR CORRUPTION OF DATA OR COST OF PROCUREMENT OF SUBSTITUTE GOODS, SERVICES OR TECHNOLOGY OR LOSS OF BUSINESS; (B) FOR ANY INDIRECT, EXEMPLARY, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES; (C) FOR ANY MATTER BEYOND COMPANY’S REASONABLE CONTROL; OR (D) FOR ANY AMOUNTS THAT, TOGETHER WITH AMOUNTS ASSOCIATED WITH ALL OTHER CLAIMS, EXCEED THE FEES PAID BY CUSTOMER TO COMPANY FOR THE SERVICES UNDER THIS AGREEMENT IN THE 12 MONTHS PRIOR TO THE ACT THAT GAVE RISE TO THE LIABILITY, IN EACH CASE, WHETHER OR NOT COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <h3 className="text-xl font-bold mb-3">8. MISCELLANEOUS</h3>
            <p className="mb-6">
              8.1. If any provision of this Agreement is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that this Agreement will otherwise remain in full force and effect and enforceable.
            </p>
            <p className="mb-6">
              8.2. This Agreement is not assignable, transferable or sublicensable by Customer except with Company’s prior written consent. Company may transfer and assign any of its rights and obligations under this Agreement without consent.
            </p>
            <p className="mb-6">
              8.3. This Agreement is the complete and exclusive statement of the mutual understanding of the parties and supersedes and cancels all previous written and oral agreements, communications and other understandings relating to the subject matter of this Agreement, and that all waivers and modifications must be in a writing signed by both parties, except as otherwise provided herein.
            </p>
            <p className="mb-6">
              8.4. No agency, partnership, joint venture, or employment is created as a result of this Agreement and Customer does not have any authority of any kind to bind Company in any respect whatsoever.
            </p>
            <p className="mb-6">
              8.5. In any action or proceeding to enforce rights under this Agreement, the prevailing party will be entitled to recover costs and attorneys’ fees.
            </p>
            <p className="mb-6">
              8.6. Notices to Customer may be sent to the contact points identified in the Order Form, and such notices will be deemed received three days after the date of mailing. Notices to Company must be sent to legal@company.com, with a copy to your_account_manager@company.com, and will be deemed received when actually received.
            </p>
            <p className="mb-6">
              8.7. This Agreement shall be governed by the laws of the State of California without regard to its conflict of laws provisions. Each party hereby consents to exclusive jurisdiction and venue in the federal courts located in California, in connection with any action arising out of or in connection with this Agreement.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Terms;
