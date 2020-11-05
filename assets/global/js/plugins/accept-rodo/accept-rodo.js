const acceptRodo = (message = {
    title: '',
    message: '',
    button: '',
    policy: ''
}) => {

    let show = dialog => {
        let modal = `<div class="modal fade" id="acceptRodo" data-backdrop="static" tabindex="-1" role="dialog">
                        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">${dialog.title}</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                </div>
                                <div class="modal-body bg-white"">
                                    <div class="ml-3 mr-3 mt-2">${dialog.message}</div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary" data-dismiss="modal">${dialog.button}</button>
                                </div>
                                <div class="row ml-2 mr-2 mt-1 mb-4">
                                    <div class="col small">${dialog.policy}</div>
                                </div>
                            </div>
                        </div>
                    </div>`;

        $('body').append(modal);

        $('#acceptRodo')
            .find('[data-dismiss="modal"]')
            .click(function() {
                jsPie.setCookie('acceptRodo', true, 30);
            });

        $('#acceptRodo').modal();
    };

    if (jsPie.getCookie('acceptRodo') === undefined) {
        show(message);
    }
};

exports.acceptRodo = acceptRodo;