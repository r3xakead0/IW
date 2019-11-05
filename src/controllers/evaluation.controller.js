import Evaluation from "../models/Evaluation";

export async function addEvaluation(req, res) {
    try {
        const { id } = req.params;
        
        const evaluation = await Evaluation.findOne({
            where: { athleteid: id }
        });

        if (evaluation) {
            res.render('evaluations/edit', { evaluation } );
        } else {
            res.render('evaluations/add', { athleteid : id } );
        }
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: { e }
        });
    }
}

export async function createEvaluation(req, res) {
    const { athleteid } = req.body;
    const { ankles, abductors, hipflexors, pectoral, shoulder, pyramidal, hamstrings } = req.body;
    const { frontcoretest, sidecoretest, amnesiagluteus } = req.body;
    const { contracts, birdog, standup, genu } = req.body;
    const { balance, recomendations } = req.body; 
    const createddate = Date.now();
    try {
        let newEvaluation = await Evaluation.create({
            athleteid,
            ankles, 
            abductors, 
            hipflexors, 
            pectoral, 
            shoulder, 
            pyramidal, 
            hamstrings,
            frontcoretest, 
            sidecoretest, 
            amnesiagluteus,
            contracts, 
            birdog, 
            standup, 
            genu, 
            balance, 
            recomendations,
            createddate
        }, {
            fields: ['athleteid', 'ankles', 'abductors', 'hipflexors', 'pectoral', 
            'shoulder', 'pyramidal', 'hamstrings', 'frontcoretest', 
            'sidecoretest', 'amnesiagluteus', 'contracts', 'birdog', 
            'standup', 'genu', 'balance', 'recomendations', 
            'createddate']
        });

        if (newEvaluation) {
            res.redirect('/athletes');
        }
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: { e }
        });
    }
}

export async function updateEvaluation(req, res) {
    const { id } = req.params;
    const { ankles, abductors, hipflexors, pectoral, shoulder, pyramidal, hamstrings } = req.body;
    const { frontcoretest, sidecoretest, amnesiagluteus } = req.body;
    const { contracts, birdog, standup, genu } = req.body;
    const { balance, recomendations } = req.body; 
    const updateddate = Date.now();
    try {

        const updateRowCount = await Evaluation.update({
            ankles, 
            abductors, 
            hipflexors, 
            pectoral, 
            shoulder, 
            pyramidal, 
            hamstrings,
            frontcoretest, 
            sidecoretest, 
            amnesiagluteus,
            contracts, 
            birdog, 
            standup, 
            genu, 
            balance, 
            recomendations,
            updateddate
        },
            {
                where: { id }
            }
        );
        if (updateRowCount > 0) {
            res.redirect('/athletes');
        }
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: { e }
        });
    }
}
